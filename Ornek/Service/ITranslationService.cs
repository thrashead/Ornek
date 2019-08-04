using System;
using System.Collections.Generic;
using System.Runtime.Serialization;
using System.ServiceModel;
using System.ServiceModel.Web;

namespace Ornek.Service
{
	[ServiceContract]
	public interface ITranslationService
	{
		[OperationContract]
		[WebGet(UriTemplate = "/Select/?top={top}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		List<TranslationData> Select(string top);

		[OperationContract]
		[WebGet(UriTemplate = "/SelectAll/?id={id}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		List<TranslationData> SelectAll(string id);

		[OperationContract]
		[WebGet(UriTemplate = "/SelectByID/?id={id}", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		TranslationData SelectByID(string id);

		[OperationContract]
		[WebInvoke(Method = "POST", UriTemplate = "/Insert/", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		bool Insert(TranslationData table);

		[OperationContract]
		[WebInvoke(Method = "POST", UriTemplate = "/Update/", ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json, BodyStyle = WebMessageBodyStyle.Wrapped)]
		bool Update(TranslationData table);

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
	public class TranslationData
	{
		[DataMember]
		public int ID { get; set; }
		[DataMember]
		public string TransName { get; set; }
		[DataMember]
		public string ShortName { get; set; }
		[DataMember]
		public string Flag { get; set; }
		[DataMember]
		public bool Active { get; set; }
	}
}
