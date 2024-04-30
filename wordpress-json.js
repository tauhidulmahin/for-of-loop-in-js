let wordpress = [    //array
    {    //array[0]
        "id": 157538,
        "date": "2017-07-21T10:30:34",
        "date_gmt": "2017-07-21T17:30:34",
        "guid": {
            "rendered": "https://www.sitepoint.com/?p=157538"
        },
        "modified": "2017-07-23T21:56:35",
        "modified_gmt": "2017-07-24T04:56:35",
        "slug": "why-the-iot-threatens-your-wordpress-site-and-how-to-fix-it",
        "status": "publish",
        "type": "post",
        "link": "https://www.sitepoint.com/why-the-iot-threatens-your-wordpress-site-and-how-to-fix-it/",
        "title": {
            "rendered": "Why the IoT Threatens Your WordPress Site (and How to Fix It)"
        },
        "content": 12,
        "excerpt": 34,
        "author": 72546,
        "featured_media": 157542,
        "comment_status": "open",
        "ping_status": "closed",
        "sticky": false,
        "template": "",
        "format": "standard",
        "meta": [],
        "categories": [
            6132
        ],
        "tags": [
            1798,
            6298
        ],

    }
]

// console.log(wordpress[0].guid.rendered);
// console.log(wordpress[0].sticky);
// console.log(wordpress[0].categories[0]);
// console.log(wordpress[0].tags[1]);


for (let prop of wordpress) {
    console.log(prop);
}