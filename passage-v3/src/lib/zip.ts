export async function createZip(_files: File[]) {
  return new Blob([], { type: "application/zip" });
}
