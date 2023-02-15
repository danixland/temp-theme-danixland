Here's a short list of things to do for the site
================================================

CONTENT
-------

- check every article added for image references, shortcodes, links and tidy up everything
- check metadata in every article
- [licensing](https://chooser-beta.creativecommons.org/)
	+ ` <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><a property="dct:title" rel="cc:attributionURL" href="https://danix.xyz">danix's ramblings</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://danix.xyz/whoami">Danilo 'danix' M.</a> is licensed under <a href="http://creativecommons.org/licenses/by-sa/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-SA 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/sa.svg?ref=chooser-v1"></a></p> `

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