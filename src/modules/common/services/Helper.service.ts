function Protect(target: any): void {
  Object.freeze(target);
  Object.preventExtensions(target);
}

@Protect
export default abstract class HelperService {
  private static STATIC_GOOD_URL = 'http://192.168.1.108:9000';

  public static makeUrl(relativeUrl: string): string {
    return `${this.STATIC_GOOD_URL}${
      relativeUrl.startsWith('/') ? relativeUrl : `${relativeUrl}}`
    }`;
  }
}
