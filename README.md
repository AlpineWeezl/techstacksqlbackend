# Tech APIs

## READ all Techs
### Request
`
GET /
`

### Response
```
{
    "techs": [
            {
                "id": "1",
                "title": "HTML",
                "logo_link": "https://i.ibb.co/Yk06zzc/HTML5.png",
                "wiki_link": "https://en.wikipedia.org/wiki/HTML",
                "creator_id": "3",
                "description": "<p>The HyperText Markup Language...</p>",
                "cat_id": "6",
                "cat_title": "Web Dev",
                "username": "somebody"
            },
            {  
                ...
            }
    ]
}
```

</br>
</br>

## CREATE a Tech
### Request
`
POST /
`

### Request Body
```
{
    "tech": {
            "id": "1",
            "title": "newTech",
            "description": "newDescription",
            "logo_link": "https://...",
            "wiki_link": "https://...",
            "creator_id": "1",
            "created_at": "2022-05-20T14:40:31.525Z",
            "category_id": "1"
        }
}
```

</br>
</br>

## READ a Tech by ID
### Request
`
GET /:id
`

### Response
```
{
    "tech": {
                "id": "1",
                "title": "HTML",
                "logo_link": "https://...",
                "wiki_link": "https://...",
                "creator_id": "3",
                "description": "<p>The HyperText Markup Language...</p>"
                "cat_id": "6",
                "cat_title": "Web Dev",
                "username": "somebody"
    }
}
```

</br>
</br>

## UPDATE a Tech by ID
### Request
`
PUT /:id
`

### Response
```
{
    "tech": {
                "id": "1",
                "title": "changedTitle",
                "logo_link": "https://...",
                "wiki_link": "https://...",
                "creator_id": "3",
                "description": "<p>changed Text...</p>"
                "cat_id": "6",
                "cat_title": "Web Dev",
                "username": "somebody"
    }
}
```

</br>
</br>

## DELETE a Tech by ID
### Request
`
DELETE /:id
`

### Response
```
"message": "Tech with id #1 successfully deleted"
```

</br>
</br>

## READ a Tech by Category ID
### Request
`
GET /category/:cat_id
`

### Response
```
{
    "techs": [
        {
            "id": "1",
            "title": "HTML",
            "description": "<p>The HyperText Markup Language...</p>",
            "logo_link": "https://...",
            "wiki_link": "https://...",
            "creator_id": "3",
            "created_at": "2022-05-09T13:25:56.540Z",
            "category_id": "6"
        },
        {
            ... ,
            "category_id": "6"
        }
    ]
}
        
```

</br>
</br>
</br>

<!-- ---------------------- -->
# Category APIs

## READ all Categories
### Request
`
GET /
`

### Response
```
{
    "categories": [
        {
            "id": "7",
            "title": "General",
            "description": null,
            "creator_id": "4",
            "created_at": "2022-05-09T13:16:32.096Z"
        },
        {
        ...
        }
    ]
}
```

</br>
</br>

## CREATE a Category
### Request
`
POST /
`

### Request Body
```
{
    "category": {
            "id": "11",
            "title": "newCategory",
            "description": "newDescription",
            "creator_id": "4",
            "created_at": "2022-05-09T13:16:32.096Z"
        }
}
```

</br>
</br>

## READ a Category by ID
### Request
`
GET /:id
`

### Response
```
{
    "category": {
        "id": "6",
        "title": "Web Dev",
        "description": "here comes the description!",
        "creator_id": "4",
        "created_at": "2022-05-09T13:15:22.428Z"
    }
}
```

</br>
</br>

## UPDATE a Category
### Request
`
PUT /:id
`

### Response
```
{
    "category": {
            "id": "11",
            "title": "changedCategory",
            "description": "changedDescription",
            "creator_id": "4",
            "created_at": "2022-05-09T13:16:32.096Z"
        }
}
```

</br>
</br>

## DELETE a Category by ID
### Request
`
DELETE /:id
`

### Response
```
"message": "Category #1 was successfully deleted!"
```