## Step 1: Fetch Photo Data & Render Photos on Page Load
---
- issue Ajax request to server to get JSON data for all photos on page load 
Use the photos to:
- render `photos` template - add to `#slides` div
- render `photo_information` template with first photo's data
  - write it to `secton > header` element that needs to hold photo information
Endpoint:
- Path: `/photos`
- HTTP method: `GET`
- Returns: array of photos data in JSON format (convert to JS)

`/photos` return value:

```
[{"src":"http://via.placeholder.com/1280x1024","title":"City Lights","caption":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.","created_at":"3/31/15","likes":5,"favorites":2,"id":1},
{"src":"http://via.placeholder.com/1280x1024/ffffff/0066cc","title":"Happy Dog","caption":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.","created_at":"4/1/15","likes":0,"favorites":0,"id":2},
{"src":"http://via.placeholder.com/1280x1024/0066cc/ffffff","title":"Down by the Stream","caption":"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.","created_at":"4/1/15","likes":1,"favorites":1,"id":3}]
```

Approach:
- make get to request to `/photos` and retrieve array of photos in JSON
  - await fetch(url);
  - await reponse.json();
- important values: 
  - src: "http://via.placeholder.com/1280x1024"
  - title: 'City Lights'
  - caption: string of text
  - created_at: string date - "3/14/2015"
  - likes: number - 5
  - favorites: number - 2
  - id: number - 1
- parse the data into Javascript
- update the values in the template for photos (first photo)

Template 1:
```<script id="photos" type="text/x-handlebars">
  {{#each photos}}                            
    <figure data-id="{{id}}">                
      <img src="{{src}}" />                   
      <figcaption>{{caption}}</figcaption>    
    </figure>
  {{/each}}
</script>
```
```
{{id}} -> 1
{{src}} -> "http://via.placeholder.com/1280x1024"
{{caption}} -> -> "Lorem ipsum dolor sit amet, consectetur adipiscing elit," 
```

Template 2: 
```
<script id="photo_information" type="text/x-handlebars">
  <h2>{{title}}</h2>
  <p><time>Taken on {{created_at}}</time></p>
  <div class="actions">
    <a href="/photos/like" data-id="{{id}}" data-property="likes" class="button like">
      ♡
      {{#if likes}}
      {{likes}}
      {{else}}
      0
      {{/if}}
      Likes
    </a>
    <a href="/photos/favorite" data-id="{{id}}" data-property="favorites" class="button favorite">
      ☆
      {{#if favorites}}
      {{favorites}}
      {{else}}
      0
      {{/if}}
      Favorites
    </a>
```
```
{{title}}      -> "City Lights"
{{created_at}} -> "3/14/2015"
{{likes}}      -> 4
{{favorites}}  -> 2 
```

## Step 2: Render Comments for First Photo
---
- Path: `/comments?photo_id=\<number\>` (`/comments?photo_id=1`)
- Method: GET
- Returns: array of comments for the photo with `photo_id`

Template 3: 
```
<script id="photo_comments" type="text/x-handlebars">
  {{#each comments}}
  {{> photo_comment}}
  {{/each}}
</script>
```
```
{{comments}} -> array of comments
[{"name":"Shane Riley","photo_id":1,"gravatar":"http://gravatar.com/avatar/9f6f9c0b100d371267f07a12f73edf9d","date":"3/31/15","body":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{"name":"Constance Zemicky","photo_id":1,"gravatar":"http://gravatar.com/avatar/0af2673451bb2c52eda2a7aa1f2467c9","date":"3/31/15",
"body":"Keffiyeh next level readymade, hashtag chillwave tofu freegan PBR&B cray four dollar toast Echo Park art party American Apparel Portland skateboard. Semiotics Bushwick flexitarian, plaid drinking vinegar deep v keytar lomo squid banjo sustainable try-hard PBR cronut ethical. Scenester bitters roof party tofu, disrupt flannel deep v Brooklyn meditation actually blog Austin pop-up Thundercats wayfarers. Fingerstache High Life brunch VHS, sriracha Bushwick hashtag Helvetica banh mi raw denim. Flannel Etsy keffiyeh blog stumptown bespoke leggings cornhole. Heirloom PBR&B letterpress blog Odd Future readymade messenger bag, aesthetic literally. Yr Banksy banh mi authentic PBR."}]
```

Template 4 Partial: 
```
<script id="photo_comment" data-type="partial" type="text/x-handlebars">
  <li>
    <article>
      <figure>
        <img src="{{gravatar}}" />
      </figure>
      <header>
        <h1>{{name}}</h1>
        <p><small><time>Posted {{date}}</time></small></p>
      </header>
      <p>{{body}}</p>
    </article>
  </li>
</script>
```
``` 
{{gravatar}} -> "http://gravatar.com/avatar/9f6f9c0b100d371267f07a12f73edf9d"
{{name}}     -> "Shane Riley"
{{date}}     -> "3/31/15"
{{body}}     -> "Lorem ipsum dolor sit amet" 
```

## Step 3: Create the Slide Show Functionality
---
- handle slideshow functionality
- this fades the current photo and renders the next photo/information/comments 
Requirements:
- attach events to both left and right anchors that fade out the current photo and render the new one at the same time
- if on first photo and when 'previous' clicked, loop to last photo
- if on last photo and when 'next' clicked, loop back to first photo
- each slide transition renders photo information/comments for new photo

Using Javascript:
- not using jQuery; using vanilla Javascript
- one approach to fading:
  - alter `opacity` of slides
  - set a transition `duration` for that property change
- some css properties cannot be animated, including display
- to fade slides with opacity, update .css file `#slides figure + figure` to use opacity
#slides figure + figure {
  opacity: 0;
}

Approach:
- select left and right anchors
- attach click event listeners to `prev` and `next` anchors
- Photo 1 | Index 0
- when user clicks on 'prev' arrow
  - if current photo index === 0
    - start the index at the length of photos array + 1
    - if length is 5, index = 4
  - for all photos 
    - fade out current photo
    - fade in previous photo
    - render new photo/photo-information/comments 
- when user clicks on 'next' arrow
  - if current photo index === length of array - 1
      - start index at 0
      - if at index 4 for array length 5, index = 0
  - for all photos
    - fade out current photo
    - fade in next photo
    - render new photo/photo-information/comments 

# Part 3 - Like, Favorite, Comment
## Step 4: Like and Favorite a Photo
---
- when user clicks on like (heart) or favorite (star), increase the counts for either

Like:
- Path: `/photos/like`
- Data: `photo_id` as data
- Method: POST

Favorite:
- Path: `/photos/favorite`
- Data: `photo_id`
- METHOD: POST 

Return Values for Like and Favorite:
- JSON object of `total` -> number 
{
  total: 6
}

Approach:
- get elements for like and favorite:
  - like: 
---

Step 5: Add a new comment to a photo
- Path: `/comments/new`
- Method: POST
