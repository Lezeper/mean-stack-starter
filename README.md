# MEAN Stack Init

### Introduction

### Usage
                nodemon --config nodemon_d.json
### Functions
                1. Web Application Settings
                2. Module Testing and Generator
                3. One Click DB(MongoDB) Backup

### RESTful API
##### User
                GET    /api/user     - find all user
                GET    /api/:id      - find specific user
                POST   /api/login    - user login
                POST   /api/user     - user register
                PUT    /api/user     - update user
                DELETE /api/user     - delete user
                
### Framework and Plugin			
		Mongoose
		Express
		AngularJS
		NodeJS
		Jwt

### DB Model
##### Settings
                version: String, required
                admin: String, required
                web_title: String, required
                db_backup: String
                created: Date, required
##### User
                email: String, unique, required
                name: String, required
                role: String, required
                created: Date, required
                password: crypto, passport
##### Log
                ip: String, required
                target: String, required
                created: Date, required
##### ModuleModel
                module_name: String, required, unique
                required_p: Array [{prop_name: type}]
                not_required_p: Array [{prop_name: type}]
                created: Date, required

### Front End Routing
                (* means protected)
                /               - index page
                /login          - login page
               */admin/overviews- admin overviews page
               */admin/log      - admin check log page
               */admin/settings - web settings page
               */admin/module   - module management page              

### What Module Generator will do
##### Front End side
                1. Generate view and controller in new folder below
                'client' folder.
                2. Add routing settings in 'routing.js'.
                3. Add RESTful API in 'meanData' service.
##### Back End side
                1. Generate a Mongoose model.
                2. Add file to server/module/index.js.
                3. Generate corresponding controller file.
                4. Add RESTful API in routes file.
                5. Writing module inform to DB.