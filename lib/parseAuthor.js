export default author => {
  if (typeof author !== 'string') {
    return author;
  }
  const name = author.match(/^([^\(<]+)/);
  const url = author.match(/\(([^\)]+)\)/);
  const email = author.match(/<([^>]+)>/);
  const obj = {};
  if (name && name[0].trim()) {
    Object.assign(obj, {name: name[0].trim()});
  }
  if (email) {
    Object.assign(obj, {email: email[1]});
  }
  if (url) {
    Object.assign(obj, {url: url[1]});
  }
  return obj;
};
