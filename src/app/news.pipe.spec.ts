import { NewsPipe } from './news.pipe';

describe('NewsPipe', () => {
  it('create an instance', () => {
    const pipe = new NewsPipe();
    expect(pipe).toBeTruthy();
  });
});
