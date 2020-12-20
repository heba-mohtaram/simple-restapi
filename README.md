# A Simple REST API

This is a small RESTful API  written with NodeJS using Express. It consists of a single endpoint that fetches data in a MongoDB collection and returns the result in the request format.

##API details

* URL: `{{domain}}/info`
* Method: `POST`
* Auth Required: No


####Sample Request Body

```
{
    "startDate": "2016-01-26",
    "endDate": "2018-02-02",
    "minCount": 2700,
    "maxCount": 3000
}
```

####Sample Response

Returns a status code `200 OK` with `code:0` for Successful responses & `400 Bad Request` with `code:1` for Errors.


```
{
    "code": 0,
    "msg": "Success",
    "records": [
        {
            "key": "ibfRLaFT",
            "createdAt": "2016-12-25T16:43:27.909Z",
            "totalCount": 2892
        },
        {
            "key": "XCiSazeS",
            "createdAt": "2016-12-13T18:58:33.864Z",
            "totalCount": 2906
        },
        ...
    ]
}
```

## How to run the code locally?
* Clone this project into your local machine.
* Run `npm install` to get all the dependencies needed. They can be found under the manifest file. `package.json`.
* Create a valid `.env` file. This just inclues the port number & is not compulsory. 
* Run `node .` to start listening! (Entry point: index.js)
* To run the tests please use the `npm test` command.




