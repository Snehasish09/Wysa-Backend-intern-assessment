

## 1. User Registration
![1](https://github.com/user-attachments/assets/70bcf145-3a52-46b5-81d9-35bd2df35342)

- **Endpoint**: `POST /user/register`
- **Request Body**:
    ```json
    {
        "nickname": "user_nickname",
        "password": "user_password"
    }
    ```
- **Response**:
    - `200 Created` on successful registration
        - Response Body
            ```json
            {
                "success": 1,
                "id": "user_id",
                "nickname": "user_nickname",
                "message": "user created successfully",
            }
            ```
    - `400 Bad Request` if validation fails or user already exists
        - Response Body
            ```json
            {
                "success": 0,
                "message": "Error message"
            }
            ```
    - `409 Conflict` if user already exists
        - Response Body
            ```json
                {
                    "success": 0,
                    "message": "Error message"
                }
            ```

## 2. User Login
![2](https://github.com/user-attachments/assets/47025668-61e7-456a-85f1-333d2ba29662)


- **Endpoint**: `POST /user/login`
- **Request Body**:
    ```json
    {
        "nickname": "user_nickname",
        "password": "user_password"
    }
    ```
- **Response**:
    - `200 OK` with a token on successful login
        - Response Body
            ```json
            {
                "success": 1,
                "token": "jwt auth token",
                "id": "user_id",
                "nickname": "user_nickname",
                "message": "Logged in successfully",
            }
            ```
    - `401 Unauthorized` if login credentials are invalid or nickname does not exist
        - Response Body
            ```json
            {
                "success": 0,
                "message": "error message",
            }
            ```

## 3. Add Sleep Changes
![3 part 1](https://github.com/user-attachments/assets/b58c47e7-2c31-46ca-ac65-6ec553635aca)

![3 part 2](https://github.com/user-attachments/assets/08855a51-caba-4a65-982c-57626fd8d6a7)



- **Endpoint**: `POST /user/addsleepchanges`
- **Request Body**:
    ```json
    {
        "id": "user_id",
        "changes": ["Sleep change option 1", "Sleep change option 2"]
    }
    ```
- **Parameters**:
    - `id` (required): The unique identifier for the user.
    - `changes` (required): The changes as a result of sleeping well. It is an array of changes.
- **Headers**:
    - `Content-Type: application/json`
    - `authorization: Bearer <token>`
- **Response**:
    - `200 OK` on successfully adding the changes.
        - Response Body:
            ```json
            {
                "success": 1,
                "message": "Changes added successfully"
            }
            ```
    - `404 Not Found` if the user corresponding to the id is not found
        - Response Body:
            ```json
            {
                "success": 0,
                "message": "User not found",
            }
            ```
    - `500 Server Error` if some error occurs on the server side
        - Response Body:
            ```json
            {
                "success": 0,
                "message": "error message",
            }
            ```
    - `401 Unauthorized` if user is not logged in
        - Response Body:
            ```json
            {
                "success": 0,
                "message": "Unauthorized"
            }
            ```

## 4. Add Struggle Duration with Sleep
![4](https://github.com/user-attachments/assets/8365f0cf-26b7-4697-a400-963c3e3e7b87)


- **Endpoint**: `POST /user/addsleepstruggle`
- **Request Body**:
    ```json
    {
        "id": "user_id",
        "struggle": "Less than 2 weeks | 2 to 8 weeks | More than 8 weeks"
    }
    ```
- **Parameters**:
    - `id` (required): The unique identifier for the user.
    - `struggle` (required): Duration for which the user is struggling with sleep.
- **Headers**:
    - `Content-Type: application/json`
    - `authorization: Bearer <token>`
- **Response**:
    - `200 OK` on successfully adding the sleep struggle duration.
        - Response Body:
            ```json
            {
                "success": 1,
                "message": "Sleep Struggle duration added successfully"
            }
            ```
    - `404 Not Found` if the user corresponding to the id is not found
        - Response Body:
            ```json
            {
                "success": 0,
                "message": "User not found",
            }
            ```
    - `500 Server Error` if some error occurs on the server side
        - Response Body:
            ```json
            {
                "success": 0,
                "message": "error message",
            }
            ```
    - `401 Unauthorized` if user is not logged in
        - Response Body:
            ```json
            {
                "success": 0,
                "message": "Unauthorized"
            }
            ```

## 5. Add User Sleep Time
![5](https://github.com/user-attachments/assets/e90c9b80-494f-4b4e-be4f-98d0799efa8c)


- **Endpoint**: `POST /user/addbedtime`
- **Request Body**:
    ```json
    {
        "id": "user_id",
        "sleepTime": "sleep_time"
    }
    ```
- **Parameters**:
    - `id` (required): The unique identifier for the user.
    - `sleepTime` (required): The time at which the user sleeps.
- **Headers**:
    - `Content-Type: application/json`
    - `authorization: Bearer <token>`
- **Response**:
    - `200 OK` on successfully adding the bed sleeping time.
        - Response Body:
            ```json
            {
                "success": 1,
                "message": "Sleep time added successfully"
            }
            ```
    - `404 Not Found` if the user corresponding to the id is not found
        - Response Body:
            ```json
            {
                "success": 0,
                "message": "User not found",
            }
            ```
    - `500 Server Error` if some error occurs on the server side
        - Response Body:
            ```json
            {
                "success": 0,
                "message": "error message",
            }
            ```
    - `401 Unauthorized` if user is not logged in
        - Response Body:
            ```json
            {
                "success": 0,
                "message": "Unauthorized"
            }
            ```

## 6. Add User Wake Up Time
![6](https://github.com/user-attachments/assets/ddbc30ab-63a9-4c82-a6cd-d2584d79eff2)


- **Endpoint**: `POST /user/addwakeuptime`
- **Request Body**:
    ```json
    {
        "id": "user_id",
        "wakeupTime": "wakeup_time"
    }
    ```
- **Parameters**:
    - `id` (required): The unique identifier for the user.
    - `wakeupTime` (required): The time at which the user wakes up.
- **Headers**:
    - `Content-Type: application/json`
    - `authorization: Bearer <token>`
- **Response**:
    - `200 OK` on successfully adding the time at which user wakes up.
        - Response Body:
            ```json
            {
                "success": 1,
                "message": "Wakeup time added successfully"
            }
            ```
    - `404 Not Found` if the user corresponding to the id is not found
        - Response Body:
            ```json
            {
                "success": 0,
                "message": "User not found",
            }
            ```
    - `500 Server Error` if some error occurs on the server side
        - Response Body:
            ```json
            {
                "success": 0,
                "message": "error message",
            }
            ```
    - `401 Unauthorized` if user is not logged in
        - Response Body:
            ```json
            {
                "success": 0,
                "message": "Unauthorized"
            }
            ```

## 7. Add User Sleep Hours
![7](https://github.com/user-attachments/assets/c181acb0-1a07-43cd-8f88-e1f5a4808c73)


- **Endpoint**: `POST /user/addsleephours`
- **Request Body**:
    ```json
    {
        "id": "user_id",
        "sleepHours": "sleep_hours"
    }
    ```
- **Parameters**:
    - `id` (required): The unique identifier for the user.
    - `sleepHours` (required): The number of hours the user sleeps.
- **Headers**:
    - `Content-Type: application/json`
    - `authorization: Bearer <token>`
- **Response**:
    - `200 OK` on successfully adding the sleep duration in hours.
        - Response Body:
            ```json
            {
                "success": 1,
                "message": "Sleep hours added successfully"
            }
            ```
    - `404 Not Found` if the user corresponding to the id is not found
        - Response Body:
            ```json
            {
                "success": 0,
                "message": "User not found",
            }
            ```
    - `500 Server Error` if some error occurs on the server side
        - Response Body:
            ```json
            {
                "success": 0,
                "message": "error message",
            }
            ```
    - `401 Unauthorized` if user is not logged in
        - Response Body:
            ```json
            {
                "success": 0,
                "message": "Unauthorized"
            }
            ```

## 8. Get User's Sleep Score
![8](https://github.com/user-attachments/assets/92e78494-7e2b-4f08-95bb-4d06d59a4cd6)


- **Endpoint**: `GET /user/getsleepscore`
- **Request Body**:
    ```json
    {
        "id": "user_id",
    }
    ```
- **Parameters**:
    - `id` (required): The unique identifier for the user.
- **Headers**:
    - `Content-Type: application/json`
    - `authorization: Bearer <token>`
- **Response**:
    - `200 OK` on successfully getting the sleep score.
        - Response Body:
            ```json
            {
                "success": 1,
                "sleepScore": "sleep_score"
            }
            ```
    - `404 Not Found` if the user corresponding to the id is not found
        - Response Body:
            ```json
            {
                "success": 0,
                "message": "User not found",
            }
            ```
    - `500 Server Error` if some error occurs on the server side
        - Response Body:
            ```json
            {
                "success": 0,
                "message": "error message",
            }
            ```
    - `401 Unauthorized` if user is not logged in
        - Response Body:
            ```json
            {
                "success": 0,
                "message": "Unauthorized"
            }
            ```
