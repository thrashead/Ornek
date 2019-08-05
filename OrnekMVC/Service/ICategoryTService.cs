using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;

namespace OrnekMVC.Service
{
	[ServiceContract]
	public interface ICategoryTService
	{
		[OperationContract]
		[WebGet(UriTemplate = "/Select/?top={top}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		List<CategoryTData> Select(string top);

		[OperationContract]
		[WebGet(UriTemplate = "/SelectAll/?id={id}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		List<CategoryTData> SelectAll(string id);

		[OperationContract]
		[WebGet(UriTemplate = "/SelectByID/?id={id}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		CategoryTData SelectByID(string id);

		[OperationContract]
		[WebInvoke(Method = "POST", UriTemplate = "/Insert/", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		bool Insert(CategoryTData table);

		[OperationContract]
		[WebInvoke(Method = "POST", UriTemplate = "/Update/", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		bool Update(CategoryTData table);

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
	public class CategoryTData
	{
		[DataMember]
		public int ID { get; set; }
		[DataMember]
		public int CatID { get; set; }
		[DataMember]
		public int TransID { get; set; }
		[DataMember]
		public string CategoryName { get; set; }
		[DataMember]
		public string ShortText1 { get; set; }
		[DataMember]
		public string ShortText2 { get; set; }
		[DataMember]
		public string Description { get; set; }
	}
}
