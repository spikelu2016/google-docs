export function onChangeAction(newEditorState) {
  return {
    type: 'CHANGED',
    newEditorState
  };
}

// -----------------------------------------------------------------------------
// ------------------------------EditorView Actions-----------------------------
// -----------------------------------------------------------------------------

export function goBack() {
  return {
    type: 'BACK'
  };
}

export function save(newEditorState) {
  return {
    type: 'SAVE',
    newEditorState
  };
}

export function requestClose() {
  return {
    type: 'CLOSE'
  };
}

export function getTitle(title) {
  return {
    type: 'TITLE',
    title
  };
}

// -----------------------------------------------------------------------------
// ------------------------------Toolbar Actions-----------------------------
// -----------------------------------------------------------------------------

export function onBoldClick(e) {
  e.preventDefault();
  return {
    type: 'BOLD'
  };
}

export function onItalicClick(e) {
  e.preventDefault();
  return {
    type: 'ITALIC'
  };
}

export function onStrikeClick(e) {
  e.preventDefault();
  return {
    type: 'STRIKETHROUGH'
  };
}

export function onUnderlineClick(e) {
  e.preventDefault();
  return {
    type: 'UNDERLINE'
  };
}

export function onCodeClick(e) {
  e.preventDefault();
  return {
    type: 'CODE'
  };
}

export function onColorClickAction(color, e) {
  console.log('in colorclickaction');
  console.log('event:', e);
  e.preventDefault();
  return {
    type: 'COLOR',
    color: color
  };
}

export function onChangeColor(e) {
  e.preventDefault();
  return {
    type: 'CHANGE_COLOR',
  };
}

// -----------------------------------------------------------------------------
// ---------------------------DocumentPortal Actions----------------------------
// -----------------------------------------------------------------------------

export function renderDocs(documentList) {
  return {
    type: 'RENDER_DOCS',
    documentList: documentList.data
  };
}

export function newDoc(docName, docId, isShared) {
  return {
    type: 'NEW_DOC',
    docName,
    isShared,
    docId,
  };
}

export function addSharedDoc(docName, docId, isShared) {
  return {
    type: 'ADD_SHARED_DOC',
    docName,
    isShared,
    docId,
  };
}

export function openDoc(userId, docId) {
  return {
    type: 'OPEN_DOC',
    docId,
    userId
  };
}

export function deleteDoc(userId, docId) {
  return {
    type: 'DELETE_DOC',
    docId,
    userId
  };
}

export function login(userId) {
  return {
    type: 'LOGIN',
    userId
  };
}

export function saveUsername(username) {
  return {
    type: 'USERNAME',
    username
  };
}

export function savePassword(password) {
  return {
    type: 'PASSWORD',
    password
  };
}

export function regUsername(regUsername) {
  return {
    type: 'REGUSERNAME',
    regUsername
  };
}

export function regPassword(regPassword) {
  return {
    type: 'REGPASSWORD',
    regPassword
  };
}

export function verPassword(verPassword) {
  return {
    type: 'VERPASSWORD',
    verPassword
  };
}

export function register() {
  return {
    type: 'REGISTER',
  };
}
