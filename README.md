# MEAN Stack Starter

### Introduction
                This is a personal MEAN Stack Starter. It contains some
                normal modules for a website, for example, **Login/Reg
                ister** with encrypt password, **Log** module allows
                admin to monitor visitors. **DB Backup** module allow to
                backup MongoDB with One-Click.

### Usage
                > npm install
                > gulp
                > nodemon

### Main Functions
                1. Login, Logout, Register
                2. Web Application Settings
                3. Monitor visitor through Log module
                4. One Click DB(MongoDB) Backup

### Main Framework and Plugin            
                Mongoose
                Express 4
                AngularJS 1.6.1
                NodeJS
                Jwt
                Passport
                Nodemon
                Gulp
                UI Bootstrap 2.5.0

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

### Front End Routing
                (* means protected)
                /               - index page
                /login          - login page
               */admin/overviews- admin overviews page
               */admin/log      - admin check log page
               */admin/settings - web settings page         