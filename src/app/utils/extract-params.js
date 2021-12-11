export function extractParams(str) {
  const parsedStr = str.replace(/[^: ]*:[^ ]*/g, "").trim();
  const params = Object.fromEntries(
    (str.match(/[^: ]*:[^ ]*/g) || []).map(param => param.split(/:(.*)/))
  );

  return [parsedStr, params];
}
