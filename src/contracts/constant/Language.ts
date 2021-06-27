
import CodeLanguage from "../interface/CodeLanguage";

export const enum LanguageCode
{
  INDONESIAN = "id",
  ENGLISH = "en",
}

export const attributes: CodeLanguage = {
  id: {
    /** SYSTEM (DO NOT DELETE) */
    "attribute": "Atribut",
    "value": "Nilai",

    /** APPLICATION */
    "limit": "Limit",
    "offset": "Offset",
    "q": "Kata kunci",
    "token": "Token",
    "device": "Perangkat",
    "document": "Dokumen",
    "description": "Deskripsi",
    "type": "Jenis",
    "category": "Kategori",
    "features": "Fitur",
    "google_token": "Token",
    "message": "Pesan",

    /** IDENTIFIER */
    "app_id": "Aplikasi",
    "user_id": "Pengguna",
    "modifier_id": "Pengubah",
    "photo_id": "Foto",
    "attachment_id": "Lampiran",
    "file_id": "File",

    /** ADDRESS */
    "country_id": "Negara",
    "province_id": "Provinsi",
    "regency_id": "Kota / kabupaten",
    "district_id": "Kecamatan",
    "village_id": "Kelurahan / desa",
    "postal_code": "Kode pos",
    "latitude": "Garis lintang",
    "longitude": "Garis bujur",
    "hamlet_number": "RT",
    "neighbourhood_number": "RW",
    "street": "Jalan",

    /** PERSONAL */
    "name": "Nama",
    "gender": "Jenis Kelamin",
    "birth_place": "Tempat lahir",
    "birth_at": "Tanggal lahir",
    "phone": "Telepon",
    "email": "Email",
    "identifier": "Pengenal",
  },
  en: {
    /** SYSTEM (DO NOT DELETE) */
    "attribute": "Attribute",
    "value": "Value",
    
    /** APPLICATION */

    "limit": "Limit",
    "offset": "Offset",
    "q": "Keyword",
    "token": "Token",
    "device": "Device",
    "document": "Document",
    "description": "Description",
    "type": "Type",
    "category": "Category",
    "features": "Feature",
    "google_token": "Token",
    "message": "Message",

    /** IDENTIFIER */
    "app_id": "Application",
    "user_id": "User",
    "modifier_id": "Modifier",
    "photo_id": "Photo",
    "attachment_id": "Attachment",
    "file_id": "File",

    /** ADDRESS */
    "country_id": "Country",
    "province_id": "Province",
    "regency_id": "Regency",
    "district_id": "District",
    "village_id": "Village",
    "postal_code": "Postal Code",
    "latitude": "Latitude",
    "longitude": "Longitude",
    "hamlet_number": "Hamlet Number",
    "neighbourhood_number": "Neighbourhood Number",
    "street": "Street",

    /** PERSONAL */
    "name": "Name",
    "gender": "Gender",
    "birth_place": "Birth place",
    "birth_at": "Birth date",
    "phone": "Phone",
    "email": "Email",
    "identifier": "Identifier",    
  }
}

export const messages: CodeLanguage = {
  id: {
    "required": ":attribute wajib diisi",
    "invalid_value": ":attribute tidak valid",
    "not_found": ":attribute tidak ditemukan",
    "not_used": ":attribute tidak digunakan",
    "forbidden": ":attribute tidak diperbolehkan",
    "number": ":attribute harus berupa angka yang valid",
    "min": ":attribute harus lebih dari :value",
    "max": ":attribute harus kurang dari :value",
    "lt": ":attribute harus kurang dari :value",
    "gt": ":attribute harus lebih dari :value",
    "between": ":attribute harus diantara :value dan :value",
    "has_used": ":attribute telah digunakan"
  },
  en: {
    "required": ":attribute is required",
    "invalid_value": ":attribute is not valid",
    "not_found": ":attribute is not found",
    "not_used": ":attribute is not used",
    "forbidden": ":attribute is not allowed",
    "number": ":attribute should be a valid number",
    "min": ":attribute must greater than :value",
    "max": ":attribute must less than :value",
    "lt": ":attribute must less than :value",
    "gt": ":attribute must greater than :value",
    "between": ":attribute shoudl between :value and :value",
    "has_used": ":attribute has been used"
  }
}
