/**
 *
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.2
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { XHR } from "./XHR"
import * as models from "../model/models"

export class iccBeKmehrApi {
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

  handleError(e: XHR.Data) {
    if (e.status == 401) throw Error("auth-failed")
    else throw Error("api-error" + e.status)
  }

  checkIfSMFPatientsExists(
    documentId: string,
    documentKey?: string,
    patientId?: string,
    language?: string,
    body?: any
  ): Promise<Array<models.CheckSMFPatientResult> | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/smf/{documentId}/checkIfSMFPatientsExists".replace(
        "{documentId}",
        documentId + ""
      ) +
      "?ts=" +
      new Date().getTime() +
      (documentKey ? "&documentKey=" + documentKey : "") +
      (patientId ? "&patientId=" + patientId : "") +
      (language ? "&language=" + language : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.CheckSMFPatientResult(it)))
      .catch(err => this.handleError(err))
  }
  generateContactreportExport(
    patientId: string,
    id: string,
    date?: number,
    language?: string,
    recipientNihii?: string,
    recipientSsin?: string,
    recipientFirstName?: string,
    recipientLastName?: string,
    mimeType?: string,
    body?: Array<string>
  ): Promise<ArrayBuffer | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/contactreport/{patientId}/export/{id}"
        .replace("{patientId}", patientId + "")
        .replace("{id}", id + "") +
      "?ts=" +
      new Date().getTime() +
      (date ? "&date=" + date : "") +
      (language ? "&language=" + language : "") +
      (recipientNihii ? "&recipientNihii=" + recipientNihii : "") +
      (recipientSsin ? "&recipientSsin=" + recipientSsin : "") +
      (recipientFirstName ? "&recipientFirstName=" + recipientFirstName : "") +
      (recipientLastName ? "&recipientLastName=" + recipientLastName : "") +
      (mimeType ? "&mimeType=" + mimeType : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/octet-stream"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => doc.body)
      .catch(err => this.handleError(err))
  }
  generateDiaryNote(
    patientId: string,
    language?: string,
    body?: models.DiaryNoteExportInfoDto
  ): Promise<ArrayBuffer | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/diarynote/{patientId}/export".replace("{patientId}", patientId + "") +
      "?ts=" +
      new Date().getTime() +
      (language ? "&language=" + language : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => doc.body)
      .catch(err => this.handleError(err))
  }
  generateLabresultExport(
    patientId: string,
    id: string,
    date?: number,
    language?: string,
    recipientNihii?: string,
    recipientSsin?: string,
    recipientFirstName?: string,
    recipientLastName?: string,
    mimeType?: string,
    body?: Array<string>
  ): Promise<ArrayBuffer | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/labresult/{patientId}/export/{id}"
        .replace("{patientId}", patientId + "")
        .replace("{id}", id + "") +
      "?ts=" +
      new Date().getTime() +
      (date ? "&date=" + date : "") +
      (language ? "&language=" + language : "") +
      (recipientNihii ? "&recipientNihii=" + recipientNihii : "") +
      (recipientSsin ? "&recipientSsin=" + recipientSsin : "") +
      (recipientFirstName ? "&recipientFirstName=" + recipientFirstName : "") +
      (recipientLastName ? "&recipientLastName=" + recipientLastName : "") +
      (mimeType ? "&mimeType=" + mimeType : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/octet-stream"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => doc.body)
      .catch(err => this.handleError(err))
  }
  generateMedicationSchemeExport(
    patientId: string,
    language?: string,
    recipientSafe?: string,
    version?: number,
    body?: models.MedicationSchemeExportInfoDto
  ): Promise<ArrayBuffer | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/medicationscheme/{patientId}/export".replace("{patientId}", patientId + "") +
      "?ts=" +
      new Date().getTime() +
      (language ? "&language=" + language : "") +
      (recipientSafe ? "&recipientSafe=" + recipientSafe : "") +
      (version ? "&version=" + version : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => doc.body)
      .catch(err => this.handleError(err))
  }
  generateNoteExport(
    patientId: string,
    id: string,
    date?: number,
    language?: string,
    recipientNihii?: string,
    recipientSsin?: string,
    recipientFirstName?: string,
    recipientLastName?: string,
    mimeType?: string,
    body?: Array<string>
  ): Promise<ArrayBuffer | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/note/{patientId}/export/{id}"
        .replace("{patientId}", patientId + "")
        .replace("{id}", id + "") +
      "?ts=" +
      new Date().getTime() +
      (date ? "&date=" + date : "") +
      (language ? "&language=" + language : "") +
      (recipientNihii ? "&recipientNihii=" + recipientNihii : "") +
      (recipientSsin ? "&recipientSsin=" + recipientSsin : "") +
      (recipientFirstName ? "&recipientFirstName=" + recipientFirstName : "") +
      (recipientLastName ? "&recipientLastName=" + recipientLastName : "") +
      (mimeType ? "&mimeType=" + mimeType : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/octet-stream"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => doc.body)
      .catch(err => this.handleError(err))
  }
  generatePrescriptionExport(
    patientId: string,
    id: string,
    date?: number,
    language?: string,
    recipientNihii?: string,
    recipientSsin?: string,
    recipientFirstName?: string,
    recipientLastName?: string,
    mimeType?: string,
    body?: Array<string>
  ): Promise<ArrayBuffer | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/prescription/{patientId}/export/{id}"
        .replace("{patientId}", patientId + "")
        .replace("{id}", id + "") +
      "?ts=" +
      new Date().getTime() +
      (date ? "&date=" + date : "") +
      (language ? "&language=" + language : "") +
      (recipientNihii ? "&recipientNihii=" + recipientNihii : "") +
      (recipientSsin ? "&recipientSsin=" + recipientSsin : "") +
      (recipientFirstName ? "&recipientFirstName=" + recipientFirstName : "") +
      (recipientLastName ? "&recipientLastName=" + recipientLastName : "") +
      (mimeType ? "&mimeType=" + mimeType : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/octet-stream"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => doc.body)
      .catch(err => this.handleError(err))
  }
  generateReportExport(
    patientId: string,
    id: string,
    date?: number,
    language?: string,
    recipientNihii?: string,
    recipientSsin?: string,
    recipientFirstName?: string,
    recipientLastName?: string,
    mimeType?: string,
    body?: Array<string>
  ): Promise<ArrayBuffer | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/report/{patientId}/export/{id}"
        .replace("{patientId}", patientId + "")
        .replace("{id}", id + "") +
      "?ts=" +
      new Date().getTime() +
      (date ? "&date=" + date : "") +
      (language ? "&language=" + language : "") +
      (recipientNihii ? "&recipientNihii=" + recipientNihii : "") +
      (recipientSsin ? "&recipientSsin=" + recipientSsin : "") +
      (recipientFirstName ? "&recipientFirstName=" + recipientFirstName : "") +
      (recipientLastName ? "&recipientLastName=" + recipientLastName : "") +
      (mimeType ? "&mimeType=" + mimeType : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/octet-stream"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => doc.body)
      .catch(err => this.handleError(err))
  }
  generateRequestExport(
    patientId: string,
    id: string,
    date?: number,
    language?: string,
    recipientNihii?: string,
    recipientSsin?: string,
    recipientFirstName?: string,
    recipientLastName?: string,
    mimeType?: string,
    body?: Array<string>
  ): Promise<ArrayBuffer | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/request/{patientId}/export/{id}"
        .replace("{patientId}", patientId + "")
        .replace("{id}", id + "") +
      "?ts=" +
      new Date().getTime() +
      (date ? "&date=" + date : "") +
      (language ? "&language=" + language : "") +
      (recipientNihii ? "&recipientNihii=" + recipientNihii : "") +
      (recipientSsin ? "&recipientSsin=" + recipientSsin : "") +
      (recipientFirstName ? "&recipientFirstName=" + recipientFirstName : "") +
      (recipientLastName ? "&recipientLastName=" + recipientLastName : "") +
      (mimeType ? "&mimeType=" + mimeType : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/octet-stream"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => doc.body)
      .catch(err => this.handleError(err))
  }
  generateResultExport(
    patientId: string,
    id: string,
    date?: number,
    language?: string,
    recipientNihii?: string,
    recipientSsin?: string,
    recipientFirstName?: string,
    recipientLastName?: string,
    mimeType?: string,
    body?: Array<string>
  ): Promise<ArrayBuffer | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/result/{patientId}/export/{id}"
        .replace("{patientId}", patientId + "")
        .replace("{id}", id + "") +
      "?ts=" +
      new Date().getTime() +
      (date ? "&date=" + date : "") +
      (language ? "&language=" + language : "") +
      (recipientNihii ? "&recipientNihii=" + recipientNihii : "") +
      (recipientSsin ? "&recipientSsin=" + recipientSsin : "") +
      (recipientFirstName ? "&recipientFirstName=" + recipientFirstName : "") +
      (recipientLastName ? "&recipientLastName=" + recipientLastName : "") +
      (mimeType ? "&mimeType=" + mimeType : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/octet-stream"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => doc.body)
      .catch(err => this.handleError(err))
  }
  generateSmfExport(
    patientId: string,
    language?: string,
    body?: models.SoftwareMedicalFileExportDto
  ): Promise<ArrayBuffer | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/smf/{patientId}/export".replace("{patientId}", patientId + "") +
      "?ts=" +
      new Date().getTime() +
      (language ? "&language=" + language : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => doc.body)
      .catch(err => this.handleError(err))
  }
  generateSumehr(
    patientId: string,
    language?: string,
    body?: models.SumehrExportInfoDto
  ): Promise<ArrayBuffer | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/sumehr/{patientId}/export".replace("{patientId}", patientId + "") +
      "?ts=" +
      new Date().getTime() +
      (language ? "&language=" + language : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => doc.body)
      .catch(err => this.handleError(err))
  }
  generateSumehrV2(
    patientId: string,
    language?: string,
    body?: models.SumehrExportInfoDto
  ): Promise<ArrayBuffer | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/sumehrv2/{patientId}/export".replace("{patientId}", patientId + "") +
      "?ts=" +
      new Date().getTime() +
      (language ? "&language=" + language : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => doc.body)
      .catch(err => this.handleError(err))
  }
  getSumehrContent(
    patientId: string,
    body?: models.SumehrExportInfoDto
  ): Promise<models.SumehrContentDto | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/sumehr/{patientId}/content".replace("{patientId}", patientId + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.SumehrContentDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getSumehrMd5(
    patientId: string,
    body?: models.SumehrExportInfoDto
  ): Promise<models.ContentDto | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/sumehr/{patientId}/md5".replace("{patientId}", patientId + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.ContentDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getSumehrV2Content(
    patientId: string,
    body?: models.SumehrExportInfoDto
  ): Promise<models.SumehrContentDto | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/sumehrv2/{patientId}/content".replace("{patientId}", patientId + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.SumehrContentDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  getSumehrV2Md5(
    patientId: string,
    body?: models.SumehrExportInfoDto
  ): Promise<models.ContentDto | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/sumehrv2/{patientId}/md5".replace("{patientId}", patientId + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.ContentDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  importMedicationScheme(
    documentId: string,
    documentKey?: string,
    dryRun?: boolean,
    patientId?: string,
    language?: string,
    body?: any
  ): Promise<Array<models.ImportResultDto> | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/medicationscheme/{documentId}/import".replace("{documentId}", documentId + "") +
      "?ts=" +
      new Date().getTime() +
      (documentKey ? "&documentKey=" + documentKey : "") +
      (dryRun ? "&dryRun=" + dryRun : "") +
      (patientId ? "&patientId=" + patientId : "") +
      (language ? "&language=" + language : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.ImportResultDto(it)))
      .catch(err => this.handleError(err))
  }
  importSmf(
    documentId: string,
    documentKey?: string,
    dryRun?: boolean,
    patientId?: string,
    language?: string,
    body?: any
  ): Promise<Array<models.ImportResultDto> | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/smf/{documentId}/import".replace("{documentId}", documentId + "") +
      "?ts=" +
      new Date().getTime() +
      (documentKey ? "&documentKey=" + documentKey : "") +
      (dryRun ? "&dryRun=" + dryRun : "") +
      (patientId ? "&patientId=" + patientId : "") +
      (language ? "&language=" + language : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.ImportResultDto(it)))
      .catch(err => this.handleError(err))
  }
  importSumehr(
    documentId: string,
    documentKey?: string,
    dryRun?: boolean,
    patientId?: string,
    language?: string,
    body?: any
  ): Promise<Array<models.ImportResultDto> | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/sumehr/{documentId}/import".replace("{documentId}", documentId + "") +
      "?ts=" +
      new Date().getTime() +
      (documentKey ? "&documentKey=" + documentKey : "") +
      (dryRun ? "&dryRun=" + dryRun : "") +
      (patientId ? "&patientId=" + patientId : "") +
      (language ? "&language=" + language : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.ImportResultDto(it)))
      .catch(err => this.handleError(err))
  }
  importSumehrByItemId(
    documentId: string,
    documentKey?: string,
    dryRun?: boolean,
    itemId?: string,
    patientId?: string,
    language?: string,
    body?: any
  ): Promise<Array<models.ImportResultDto> | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/sumehr/{documentId}/importbyitemid".replace("{documentId}", documentId + "") +
      "?ts=" +
      new Date().getTime() +
      (documentKey ? "&documentKey=" + documentKey : "") +
      (dryRun ? "&dryRun=" + dryRun : "") +
      (itemId ? "&itemId=" + itemId : "") +
      (patientId ? "&patientId=" + patientId : "") +
      (language ? "&language=" + language : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => (doc.body as Array<JSON>).map(it => new models.ImportResultDto(it)))
      .catch(err => this.handleError(err))
  }
  isSumehrV2Valid(
    patientId: string,
    body?: models.SumehrExportInfoDto
  ): Promise<models.SumehrValidityDto | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/sumehrv2/{patientId}/valid".replace("{patientId}", patientId + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.SumehrValidityDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  isSumehrValid(
    patientId: string,
    body?: models.SumehrExportInfoDto
  ): Promise<models.SumehrValidityDto | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/sumehr/{patientId}/valid".replace("{patientId}", patientId + "") +
      "?ts=" +
      new Date().getTime()
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => new models.SumehrValidityDto(doc.body as JSON))
      .catch(err => this.handleError(err))
  }
  validateSumehr(
    patientId: string,
    language?: string,
    body?: models.SumehrExportInfoDto
  ): Promise<ArrayBuffer | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/sumehr/{patientId}/validate".replace("{patientId}", patientId + "") +
      "?ts=" +
      new Date().getTime() +
      (language ? "&language=" + language : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => doc.body)
      .catch(err => this.handleError(err))
  }
  validateSumehrV2(
    patientId: string,
    language?: string,
    body?: models.SumehrExportInfoDto
  ): Promise<ArrayBuffer | any> {
    let _body = null
    _body = body

    const _url =
      this.host +
      "/be_kmehr/sumehrv2/{patientId}/validate".replace("{patientId}", patientId + "") +
      "?ts=" +
      new Date().getTime() +
      (language ? "&language=" + language : "")
    let headers = this.headers
    headers = headers
      .filter(h => h.header !== "Content-Type")
      .concat(new XHR.Header("Content-Type", "application/json"))
    return XHR.sendCommand("POST", _url, headers, _body, this.fetchImpl)
      .then(doc => doc.body)
      .catch(err => this.handleError(err))
  }
}
