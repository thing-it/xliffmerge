/**
 * Re-export @xmldom/xmldom DOM types for use across i18nsupport-lib.
 * Avoids conflicts with TypeScript's built-in DOM lib types.
 */
export {
  DOMParser,
  XMLSerializer,
  Document,
  Element,
  Node,
  Attr,
  CharacterData,
  Text,
  CDATASection,
  Comment,
  DocumentType,
  ProcessingInstruction,
} from '@xmldom/xmldom';
