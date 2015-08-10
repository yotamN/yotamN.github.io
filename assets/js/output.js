/// <reference path="../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../typings/marked/marked.d.ts"/>
var posts = [
    "about-me",
    "test-post"
];
var current_post = posts.length - 1;
var $article = $('article');
function load_post() {
    $.ajax({
        method: 'GET',
        url: '/posts/' + posts[current_post] + '.md'
    }).done(function (data) {
        var content = marked(data);
        $article.html(content);
        window.location.hash = posts[current_post];
    });
}
function prev() {
    if (current_post < posts.length - 1) {
        current_post++;
        load_post();
    }
}
function next() {
    if (current_post > 0) {
        current_post--;
        load_post();
    }
}
$('#next-post').click(next);
$('#prev-post').click(prev);
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 39) {
        next();
    }
    else if (e.keyCode === 37) {
        prev();
    }
});
$(load_post);
