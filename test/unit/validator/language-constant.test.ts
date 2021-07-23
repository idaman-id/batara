
import { attributes, messages } from "../../../src/validator/language.constant";

describe('language constant', () => {
  
  describe('attributes constant', () => {

    test('attributes should have default system value and key', () => {
      expect(attributes["en.attribute"]).toBe("Attribute");
      expect(attributes["en.value"]).toBe("Value");

      expect(attributes["id.attribute"]).toBe("Atribut");
      expect(attributes["id.value"]).toBe("Nilai");
    });

    test('attributes should have default application value and key', () => {
      expect(attributes["en.limit"]).toBe("Limit");
      expect(attributes["en.offset"]).toBe("Offset");
      expect(attributes["en.q"]).toBe("Keyword");
      expect(attributes["en.token"]).toBe("Token");
      expect(attributes["en.device"]).toBe("Device");
      expect(attributes["en.document"]).toBe("Document");
      expect(attributes["en.description"]).toBe("Description");
      expect(attributes["en.type"]).toBe("Type");
      expect(attributes["en.category"]).toBe("Category");
      expect(attributes["en.feature"]).toBe("Feature");
      expect(attributes["en.message"]).toBe("Message");
      
      expect(attributes["id.limit"]).toBe("Limit");
      expect(attributes["id.offset"]).toBe("Offset");
      expect(attributes["id.q"]).toBe("Kata kunci");
      expect(attributes["id.token"]).toBe("Token");
      expect(attributes["id.device"]).toBe("Perangkat");
      expect(attributes["id.document"]).toBe("Dokumen");
      expect(attributes["id.description"]).toBe("Deskripsi");
      expect(attributes["id.type"]).toBe("Jenis");
      expect(attributes["id.category"]).toBe("Kategori");
      expect(attributes["id.feature"]).toBe("Fitur");
      expect(attributes["id.message"]).toBe("Pesan");
    });

  });

  
  describe('messages constant', () => {

    test('messages should have required key', () => {
      expect(messages["en.required"]).toBe(":attribute is required");
      expect(messages["en.invalid_value"]).toBe(":attribute is not valid");
      expect(messages["en.not_found"]).toBe(":attribute is not found");
      expect(messages["en.not_used"]).toBe(":attribute is not used");
      expect(messages["en.forbidden"]).toBe(":attribute is not allowed");
      expect(messages["en.number"]).toBe(":attribute should be a valid number");
      expect(messages["en.min"]).toBe(":attribute must greater than :value");
      expect(messages["en.max"]).toBe(":attribute must less than :value");
      expect(messages["en.lt"]).toBe(":attribute must less than :value");
      expect(messages["en.gt"]).toBe(":attribute must greater than :value");
      expect(messages["en.between"]).toBe(":attribute should between :value and :value");
      expect(messages["en.has_used"]).toBe(":attribute has been used");
      
      expect(messages["id.required"]).toBe(":attribute wajib diisi");
      expect(messages["id.invalid_value"]).toBe(":attribute tidak valid");
      expect(messages["id.not_found"]).toBe(":attribute tidak ditemukan");
      expect(messages["id.not_used"]).toBe(":attribute tidak digunakan");
      expect(messages["id.forbidden"]).toBe(":attribute tidak diperbolehkan");
      expect(messages["id.number"]).toBe(":attribute harus berupa angka yang valid");
      expect(messages["id.min"]).toBe(":attribute harus lebih dari :value");
      expect(messages["id.max"]).toBe(":attribute harus kurang dari :value");
      expect(messages["id.lt"]).toBe(":attribute harus kurang dari :value");
      expect(messages["id.gt"]).toBe(":attribute harus lebih dari :value");
      expect(messages["id.between"]).toBe(":attribute harus diantara :value dan :value");
      expect(messages["id.has_used"]).toBe(":attribute telah digunakan");
    });

  });


});
