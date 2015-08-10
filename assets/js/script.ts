/// <reference path="../../typings/jquery/jquery.d.ts"/>
/// <reference path="../../typings/marked/marked.d.ts"/>

let posts: string[] = [
	"about-me",
	"test-post"
];

let current_post = posts.length - 1;

const global_name:string = 'My Blog';

let $article = $('article');
let $next    = $('#next-post');
let $prev    = $('#prev-post');

function load_post() {
	$.ajax({
		method: 'GET',
		url: '/posts/' + posts[current_post] + '.md'
	}).done((data) => {
		let content = marked(data);
		$article.html(content);
		window.location.hash = posts[current_post];
		
		if(current_post > 0) {
			$next.attr('href', '#' + posts[current_post - 1]);
		} else {
			$next.attr('href', '#');
		}
		
		if(current_post < posts.length - 1) {
			$prev.attr('href', '#' + posts[current_post + 1]);
		} else {
			$prev.attr('href', '#');
		}
		
		// history.pushState({}, posts[current_post], posts[current_post]);
		document.title = posts[current_post] + ' | ' + global_name;
	});
}

function prev() {
	if(current_post < posts.length - 1) {
		current_post++;
		load_post();
	}
}

function next() {
	if(current_post > 0) {
		current_post--;
		load_post();
	}
}

$next.click(next);
$prev.click(prev);

document.addEventListener("keydown", (e: KeyboardEvent) => {
	if(e.keyCode === 39) {
		next();
	} else if(e.keyCode === 37) {
		prev();
	}
});

$(load_post);