<div id="header" align="center">
  <img src="https://media.giphy.com/media/M9gbBd9nbDrOTu1Mqx/giphy.gif" width="100"/>
</div>

<div id="badges" align="center">
  <a href="https://www.linkedin.com/in/jpedden/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
</div>

# OpenAI ChatGPT Generator

OpenAI ChatGPT Generator is a nodeJS backend that utilizes ChatGPT to interact in a conversational way

## Getting Started

### Dependencies

Project was built with the following dependency versions
* NodeJS Version 19
* Docker Version 20

### Installation

* Get a free API Key at 
  ```
  https://openai.com/
  ```
* Clone the repo
  ```
  git clone https://github.com/jeremiepedden/OpenAI-ChatGPT-Backend
  ```
* Install NPM packages
  ```
  npm install
  ```
* Create file containing OpenAI API Key
  ```
  echo "OPENAI_API_TOKEN = Your API Key" > .env  
  ```
### Executing program

* Running the server
  ```
  npm run start
  ```
* Running the server in development mode ( nodemon )
  ```
  npm run dev
  ```
* Building Docker container
  ```
  docker build . -t <your username>/openai-chatgpt-generator
  ```

### Using program
* HTTP method: POST
* Encoding type: multipart/form-data
* Body: 
  * Key: description ( Required )
  * Value: Instructions for ChatGPT

  * Key: maxTokens ( Optional ) ( Default 1000 )
  * Value: The maximum number of tokens to generate in the completion.

  * Key: temperature ( Optional ) ( Default 0.9 )
  * Value: What sampling temperature to use. Higher values means the model will take more risks.

* Address example
  ```
  0.0.0.0:3001/openai/chatgpt
  ```
* cURL example
  ```
  curl --location --request POST '0.0.0.0:3001/openai/chatgpt' \
  --form 'description="write a short story of Batman fighting Joker"' \
  --form 'maxTokens="2000"' \
  --form 'temperature="0.9"'
  ```
  
## Version History

* 1.0
    * Initial Release

## License

This project is licensed under the Apache 2.0 License