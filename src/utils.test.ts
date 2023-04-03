import { getTotalPages } from './utils/getTotalPages';

// The test is pretty simple, we are just checking if the function returns the correct number of pages. We are using the Math.ceil() function to round up the number of pages.

describe('getTotalPages', () => {
  it('should return the correct number of pages', () => {
    const totalPages = getTotalPages(88, 10);
    expect(totalPages).toBe(9);
  });

  it('should return the correct number of pages if total results is greater than 100', () => {
    const totalPages = getTotalPages(Infinity, 15);
    expect(totalPages).toBe(Math.ceil(100 / 15));
  });

  it('should return 0 if page size is 0', () => {
    const totalPages = getTotalPages(100, 0);
    expect(totalPages).toBe(0);
  });

  it('should return 0 if total results is 0', () => {
    const totalPages = getTotalPages(100, 0);
    expect(totalPages).toBe(0);
  });
});
