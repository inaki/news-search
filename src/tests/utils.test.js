import { generateDefaultImage } from '../utils';

const urls = [
   "https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png",
   "https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1",
   "https://s.wsj.net/blogs/img/WSJ_Logo_BlackBackground_1200x630social",
   "https://www.corporateleadersgroup.com/reports-evidence-and-insights/news-images/cnn-logo.tif/image_preview",
   "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwix9Iix5_rgAhUQKqwKHTHdCNcQjRx6BAgBEAU&url=https%3A%2F%2Fdoubletap.online%2Ftag%2Fnews&psig=AOvVaw1Qw6IXFRTRelup7ne00atT&ust=1552418406475124"
];

const sources = ['nytimes.com', 'bbc.com', 'wsj.com', 'cnn.com'];

describe('Utils functions', () => {
    describe('generateDefaultImage should return string with url', () => {
        
        it('source nytimes.com', () => {
            const source = sources[0];
            const url = urls[0];
            expect(generateDefaultImage(source)).toEqual(url);
        });

        it('source bbc.com', () => {
            const source = sources[1];
            const url = urls[1];
            expect(generateDefaultImage(source)).toEqual(url);
        });

        it('source wsj.com', () => {
            const source = sources[2];
            const url = urls[2];
            expect(generateDefaultImage(source)).toEqual(url);
        });

        it('source cnn.com', () => {
            const source = sources[3];
            const url = urls[3];
            expect(generateDefaultImage(source)).toEqual(url);
        });

        it('source none or wrong', () => {
            const source = 'hola.com';
            const url = urls[4];
            expect(generateDefaultImage(source)).toEqual(url);
        });
    })
});


