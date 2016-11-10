# MEAN Stack Starter

### Introduction
                This is a personal MEAN Stack Starter. It contains some
                normal modules for a website, for example, **Login/Reg
                ister** with encrypt password, **Log** module allows
                admin to monitor visitors. **DB Backup** module allow to
                backup MongoDB with One-Click. **Module Generator** 
                module is for generating basic module with CRUD. 

### Usage
##### Before start
                edit DB setting file in 'server/config/index.js'
                using ***mongorestore*** to restore db in folder 'db'
##### For Testing
                > npm install
                > nodemon --config nodemon_p.json
##### For Developing
                > npm install
                > gulp
                > nodemon --config nodemon_d.json

### Main Functions
                1. Login, Logout, Register
                2. Web Application Settings
                3. Monitor visitor through Log module
                4. One Click DB(MongoDB) Backup
                5. Module Testing and Generator (Beta)

### Main Framework and Plugin            
                Mongoose
                Express
                AngularJS
                NodeJS
                Jwt
                Passport
                Nodemon
                Gulp

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
                front_url, String,
                required_p: Array [{prop_name: type}]
                not_required_p: Array [{prop_name: type}]
                created: Date, required,
                isEnable: Boolean, required

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