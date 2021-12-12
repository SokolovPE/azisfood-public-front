function Protect(target: any): void {
  Object.freeze(target);
  Object.preventExtensions(target);
}

@Protect
export default abstract class HelperService {
  public static makeUrl(relativeUrl: string): string {
    return `${process.env.VUE_APP_S3_URL}${
      relativeUrl.startsWith('/') ? relativeUrl : `${relativeUrl}}`
    }`;
  }
}
