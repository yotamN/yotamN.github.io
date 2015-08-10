/// <reference path="../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../typings/marked/marked.d.ts"/>
var posts = [
    "about-me",
    "test-post"
];
var current_post = posts.length - 1;
var global_name = 'My Blog';
var $article = $('article');
var $next = $('#next-post');
var $prev = $('#prev-post');
function load_post() {
    $.ajax({
        method: 'GET',
        url: '/posts/' + posts[current_post] + '.md'
    }).done(function (data) {
        var content = marked(data);
        $article.html(content);
        window.location.hash = posts[current_post];
        if (current_post > 0) {
            $next.attr('href', '#' + posts[current_post - 1]);
        }
        else {
            $next.attr('href', '#');
        }
        if (current_post < posts.length - 1) {
            $prev.attr('href', '#' + posts[current_post + 1]);
        }
        else {
            $prev.attr('href', '#');
        }
        document.title = posts[current_post] + ' | ' + global_name;
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
$next.click(next);
$prev.click(prev);
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 39) {
        next();
    }
    else if (e.keyCode === 37) {
        prev();
    }
});
$(load_post);
