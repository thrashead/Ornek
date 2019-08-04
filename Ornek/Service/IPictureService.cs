using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;

namespace Ornek.Service
{
	[ServiceContract]
	public interface IPictureService
	{
		[OperationContract]
		[WebGet(UriTemplate = "/Select/?top={top}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		List<PictureData> Select(string top);

		[OperationContract]
		[WebGet(UriTemplate = "/SelectAll/?id={id}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		List<PictureData> SelectAll(string id);

		[OperationContract]
		[WebGet(UriTemplate = "/SelectByID/?id={id}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		PictureData SelectByID(string id);

		[OperationContract]
		[WebGet(UriTemplate = "/SelectByCode/?code={code}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		List<PictureData> SelectByCode(string code);

		[OperationContract]
		[WebInvoke(Method = "POST", UriTemplate = "/Insert/", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		bool Insert(PictureData table);

		[OperationContract]
		[WebInvoke(Method = "POST", UriTemplate = "/Update/", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		bool Update(PictureData table);

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
	public class PictureData
	{
		[DataMember]
		public int ID { get; set; }
		[DataMember]
		public string Title { get; set; }
		[DataMember]
		public string Description { get; set; }
		[DataMember]
		public string PictureUrl { get; set; }
		[DataMember]
		public string ThumbUrl { get; set; }
		[DataMember]
		public string Code { get; set; }
		[DataMember]
		public bool Active { get; set; }
	}
}
