Here's a short list of things to do for the site
================================================

CONTENT
-------

- check every article added for image references, shortcodes, links and tidy up everything
- check metadata in every article

THEME
-----

- fontawesome is too big for our use case. we could use just some SVG's and inspect other implementations, like shortcodes or partials to display them. 
	+ [interesting approach using SVG's](https://www.client9.com/using-font-awesome-icons-in-hugo/)
	+ [using js and a shortcode](https://matze.rocks/posts/fontawesome_in_hugo/)
	+ [using partials and svgs](https://codingnconcepts.com/hugo/social-icons-hugo/)
- content presentation before styling
	+ we should finalize templates for different kinds of content before working on styling
		* homepage
		* articles
		* pages
		* _other ?_
	+ we should implement shortcodes and partials for the most used use cases.
		* article author gravatar?
		* article author signature?