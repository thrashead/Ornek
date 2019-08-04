using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;

namespace Ornek.Service
{
	[ServiceContract]
	public interface ICategoryService
	{
		[OperationContract]
		[WebGet(UriTemplate = "/Select/?top={top}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		List<CategoryData> Select(string top);

		[OperationContract]
		[WebGet(UriTemplate = "/SelectAll/?id={id}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		List<CategoryData> SelectAll(string id);

		[OperationContract]
		[WebGet(UriTemplate = "/SelectByID/?id={id}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		CategoryData SelectByID(string id);

		[OperationContract]
		[WebGet(UriTemplate = "/SelectByUrl/?url={url}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		CategoryData SelectByUrl(string url);

		[OperationContract]
		[WebGet(UriTemplate = "/SelectByGuid/?guid={guid}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		CategoryData SelectByGuid(string guid);

		[OperationContract]
		[WebGet(UriTemplate = "/SelectByCode/?code={code}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		List<CategoryData> SelectByCode(string code);

		[OperationContract]
		[WebInvoke(Method = "POST", UriTemplate = "/Insert/", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		bool Insert(CategoryData table);

		[OperationContract]
		[WebInvoke(Method = "POST", UriTemplate = "/Update/", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		bool Update(CategoryData table);

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
	public class CategoryData
	{
		[DataMember]
		public int ID { get; set; }
		[DataMember]
		public int ParentID { get; set; }
		[DataMember]
		public string Title { get; set; }
		[DataMember]
		public string Url { get; set; }
		[DataMember]
		public string Code { get; set; }
		[DataMember]
		public bool Active { get; set; }
		[DataMember]
		public string Guid { get; set; }
	}
}
