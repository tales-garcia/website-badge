<p align="center">
    <img src="https://website-badge.herokuapp.com/website-badge.herokuapp.com" />
    <img src="https://img.shields.io/github/license/tales-garcia/website-badge" alt="license" />
    <img src="https://img.shields.io/github/last-commit/tales-garcia/website-badge?logo=git" alt="last commit" />
</p>

# Website Badge
Website Badge is a project used to display a badge checking if a website is up or down. A demo:<br><br>
![website-badge](https://website-badge.herokuapp.com/website-badge.herokuapp.com)

# Usage
Markdown:
```
![Website Badge](https://website-badge.herokuapp.com/<HOST_NAME>)
```
HTML:
```html
<img src="https://website-badge.herokuapp.com/<HOST_NAME>" alt="Website Badge" />
```
Where `HOST_NAME` is the website to be tested. Note: `HOST_NAME` must not include **https://** or **http://**, e.g. **google.com** instead of **https://google.com**.

# Customisation

Under the hood, Website badge uses **shield.io**, so you can use all **shields.io** params, such as `color` and `style`. Checkout [shields.io](https://shields.io) to more customisation details. Pass query parameters this way:
```
https://website-badge.herokuapp.com/<HOST_NAME>?style=<STYLE>&color=<COLOR>
```
