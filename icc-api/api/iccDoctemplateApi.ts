/**
 * iCure Cloud API Documentation
 * Spring shop sample application
 *
 * OpenAPI spec version: v0.0.1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { XHR } from "./XHR"
import { ByteArrayDto } from "../model/ByteArrayDto"
import { DocIdentifier } from "../model/DocIdentifier"
import { DocumentTemplateDto } from "../model/DocumentTemplateDto"

export class iccDoctemplateApi {
  host: string
  headers: Array<XHR.Header>
  fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>

  constructor(
    host: string,
    headers: any,
    fetchImpl?: (input: RequestInfo, init?: RequestInit) => Promise<Response>
  ) {
    this.host = host
    this.headers = Object.keys(headers).map(k => new XHR.Header(k, headers[k]))
    this.fetchImpl = fetchImpl
  }

  setHeaders(h: Array<XHR.Header>) {
    this.headers = h
  }

  handleError(e: XHR.XHRError) {
    throw e
  }

  /**
   * Returns an instance of created document template.
   * @summary Create a document template with the current user
   * @param body
   */
  createDocumentTemplate(body?: DocumentTemplateDto): Promise<DocumentTemplateDto | any> {
    let _body = null
    _body = body

    const _url = this.host + `/doctemplate` + "?ts=" + new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new DocumentTemplateDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Deletes a document template
   * @param documentTemplateIds
   */
  deleteDocumentTemplate(documentTemplateIds: string): Promise<Array<DocIdentifier> | any> {
    let _body = null

    const _url =
      this.host +
      `/doctemplate/${encodeURIComponent(String(documentTemplateIds))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("DELETE", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new DocIdentifier(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets all document templates for all users
   */
  findAllDocumentTemplates(): Promise<Array<DocumentTemplateDto> | any> {
    let _body = null

    const _url = this.host + `/doctemplate/find/all` + "?ts=" + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new DocumentTemplateDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets all document templates for current user
   */
  findDocumentTemplates(): Promise<Array<DocumentTemplateDto> | any> {
    let _body = null

    const _url = this.host + `/doctemplate` + "?ts=" + new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new DocumentTemplateDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets all document templates by Type
   * @param documentTypeCode
   */
  findDocumentTemplatesByDocumentType(
    documentTypeCode: string
  ): Promise<Array<DocumentTemplateDto> | any> {
    let _body = null

    const _url =
      this.host +
      `/doctemplate/byDocumentType/${encodeURIComponent(String(documentTypeCode))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new DocumentTemplateDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets all document templates by Type For currentUser
   * @param documentTypeCode
   */
  findDocumentTemplatesByDocumentTypeForCurrentUser(
    documentTypeCode: string
  ): Promise<Array<DocumentTemplateDto> | any> {
    let _body = null

    const _url =
      this.host +
      `/doctemplate/byDocumentTypeForCurrentUser/${encodeURIComponent(String(documentTypeCode))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new DocumentTemplateDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets all document templates
   * @param specialityCode
   */
  findDocumentTemplatesBySpeciality(
    specialityCode: string
  ): Promise<Array<DocumentTemplateDto> | any> {
    let _body = null

    const _url =
      this.host +
      `/doctemplate/bySpecialty/${encodeURIComponent(String(specialityCode))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new DocumentTemplateDto(it)))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Download a the document template attachment
   * @param documentTemplateId
   * @param attachmentId
   */
  getAttachmentText(documentTemplateId: string, attachmentId: string): Promise<any | Boolean> {
    let _body = null

    const _url =
      this.host +
      `/doctemplate/${encodeURIComponent(
        String(documentTemplateId)
      )}/attachmentText/${encodeURIComponent(String(attachmentId))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => true)
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Gets a document template
   * @param documentTemplateId
   */
  getDocumentTemplate(documentTemplateId: string): Promise<DocumentTemplateDto | any> {
    let _body = null

    const _url =
      this.host +
      `/doctemplate/${encodeURIComponent(String(documentTemplateId))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => new DocumentTemplateDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Download a the document template attachment
   * @param documentTemplateId
   * @param attachmentId
   */
  getDocumentTemplateAttachment(
    documentTemplateId: string,
    attachmentId: string
  ): Promise<Array<string> | any> {
    let _body = null

    const _url =
      this.host +
      `/doctemplate/${encodeURIComponent(
        String(documentTemplateId)
      )}/attachment/${encodeURIComponent(String(attachmentId))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    return XHR.sendCommand("GET", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => JSON.parse(JSON.stringify(it))))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Creates a document's attachment
   * @param body
   * @param documentTemplateId
   */
  setDocumentTemplateAttachment(
    documentTemplateId: string,
    body?: Array<string>
  ): Promise<DocumentTemplateDto | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      `/doctemplate/${encodeURIComponent(String(documentTemplateId))}/attachment` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/octet-stream"))
    return XHR.sendCommand("PUT", _url, headers, _body, this.fetchImpl)
      .then(doc => new DocumentTemplateDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   *
   * @summary Creates a document's attachment
   * @param body
   * @param documentTemplateId
   */
  setDocumentTemplateAttachmentJson(
    documentTemplateId: string,
    body?: ByteArrayDto
  ): Promise<DocumentTemplateDto | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      `/doctemplate/${encodeURIComponent(String(documentTemplateId))}/attachmentJson` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/octet-stream"))
    return XHR.sendCommand("PUT", _url, headers, _body, this.fetchImpl)
      .then(doc => new DocumentTemplateDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }

  /**
   * Returns an instance of created document template.
   * @summary Modify a document template with the current user
   * @param body
   * @param documentTemplateId
   */
  updateDocumentTemplate(
    documentTemplateId: string,
    body?: DocumentTemplateDto
  ): Promise<DocumentTemplateDto | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      `/doctemplate/${encodeURIComponent(String(documentTemplateId))}` +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("PUT", _url, headers, _body, this.fetchImpl)
      .then(doc => new DocumentTemplateDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
}
