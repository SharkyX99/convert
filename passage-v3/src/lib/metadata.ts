export async function readMetadata(_file: File) {
  return { name: _file.name };
}
