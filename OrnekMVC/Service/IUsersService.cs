using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;

namespace OrnekMVC.Service
{
	[ServiceContract]
	public interface IUsersService
	{
		[OperationContract]
		[WebGet(UriTemplate = "/Select/?top={top}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		List<UsersData> Select(string top);

		[OperationContract]
		[WebGet(UriTemplate = "/SelectAll/?id={id}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		List<UsersData> SelectAll(string id);

		[OperationContract]
		[WebGet(UriTemplate = "/SelectByID/?id={id}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		UsersData SelectByID(string id);

		[OperationContract]
		[WebInvoke(Method = "POST", UriTemplate = "/Insert/", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		bool Insert(UsersData table);

		[OperationContract]
		[WebInvoke(Method = "POST", UriTemplate = "/Update/", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		bool Update(UsersData table);

		[OperationContract]
		[WebGet(UriTemplate = "/Copy/?id={id}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		bool Copy(string id);

		[OperationContract]
		[WebGet(UriTemplate = "/Delete/?id={id}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		bool Delete(string id);

		[OperationContract]
		[WebGet(UriTemplate = "/Remove/?id={id}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		bool Remove(string id);
	}

	[DataContract]
	public class UsersData
	{
		[DataMember]
		public int ID { get; set; }
		[DataMember]
		public string Username { get; set; }
		[DataMember]
		public string Password { get; set; }
		[DataMember]
		public bool Active { get; set; }
	}
}
