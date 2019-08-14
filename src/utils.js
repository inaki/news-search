export const generateDefaultImage = (source, e) => {
    if(source === 'wsj.com') {
        return "https://s.wsj.net/blogs/img/WSJ_Logo_BlackBackground_1200x630social";
    } else if (source === 'nytimes.com') {
        return "https://static01.nyt.com/newsgraphics/images/icons/defaultPromoCrop.png";
    } else if (source === 'bbc.com') {
        return "https://www.bbc.co.uk/news/special/2015/newsspec_10857/bbc_news_logo.png?cb=1";
    } else if (source === 'cnn.com') {
        return "https://www.corporateleadersgroup.com/reports-evidence-and-insights/news-images/cnn-logo.tif/image_preview";
    } else {
        return "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwix9Iix5_rgAhUQKqwKHTHdCNcQjRx6BAgBEAU&url=https%3A%2F%2Fdoubletap.online%2Ftag%2Fnews&psig=AOvVaw1Qw6IXFRTRelup7ne00atT&ust=1552418406475124";
    }
}