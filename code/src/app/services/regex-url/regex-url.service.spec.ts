import { TestBed } from '@angular/core/testing';

import { RegexUrlService } from './regex-url.service';

describe('RegexUrlService', () => {
  let service: RegexUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegexUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test regex domain is true', () => {
    const result = service.regexTesting("https://google.com");
    expect(result).toEqual(true);
  });

  it('test regex domain https is true', () => {
    const result = service.regexTesting("https://google.com");
    expect(result).toEqual(true);
  });

  it('test regex domain http is true', () => {
    const result = service.regexTesting("http://google.com");
    expect(result).toEqual(true);
  });

  it('test regex subdomain is true', () => {
    const result = service.regexTesting("https://mail.google.com");
    expect(result).toEqual(true);
  });

  it('test regex domain https with page / is true', () => {
    const result = service.regexTesting("https://google.com/page1");
    expect(result).toEqual(true);
  });

  it('test regex domain with parameter is true', () => {
    const result = service.regexTesting("https://google.com?url=true");
    expect(result).toEqual(true);
  });

  it('test regex domain with page and parameter is true', () => {
    const result = service.regexTesting("https://google.com/page1?url=true");
    expect(result).toEqual(true);
  });

  it('test regex ip is false ', () => {
    const result = service.regexTesting("8.8.8.8");
    expect(result).toEqual(false);
  });

  it('test regex localhost is false ', () => {
    const result = service.regexTesting("localhost");
    expect(result).toEqual(false);
  });

  it('test regex empty is false ', () => {
    const result = service.regexTesting("");
    expect(result).toEqual(false);
  });

});
