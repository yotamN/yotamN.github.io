/// <reference path="../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../typings/marked/marked.d.ts"/>

let posts: string[] = [
	"about-me",
	"test-post"
];

let current_post = posts.length - 1;

let $article = $('article');

function load_post() {
	$.ajax({
		method: 'GET',
		url: '/posts/' + posts[current_post] + '.md'
	}).done((data) => {
		let content = marked(data);
		$article.html(content);
		window.location.hash = posts[current_post];
	});
}

$('#next-post').click(function() {
	if(current_post > 0) {
		current_post--;
		load_post();
	}
});

$('#prev-post').click(function() {
	if(current_post < posts.length - 1) {
		current_post++;
		load_post();
	}
});

$(load_post);