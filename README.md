# 1DV450_rn222cx_client

Url to client application: http://45.55.147.164/client/  
Url to api repo: https://github.com/rn222cx/1DV450_rn222cx

The applications purpose is to write short unnecessary stories that will be placed on a map

No registration, the users are hardcoded.

### Users

username: admin  
email: admin<span></span>@creator.com  
password: 1234  

username: john  
email: john<span></span>@test.com  
password: 1234  

username: johan  
email: johan<span></span>@test.com  
password: 1234  

#### Have in mind
The place field generates latitude and longitude but it needs a page reload to see the effect.  
When edit tags it only ads tags and do not remove the old ones.

### Changes in the api
* Changed the token request when login to a POST request from a GET.
* Added `.present?` in my search params beckause searches reacted on blank searches.
* Added creators and changed owner of stories to creators instead of users (planned to do this in the last laboration).
