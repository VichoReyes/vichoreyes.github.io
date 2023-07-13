build: static/styles.css
	zola build

static/styles.css: styles.css tailwindcss
	./tailwindcss -i styles.css -o static/styles.css
