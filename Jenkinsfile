pipeline {
    agent any

    stages {

        stage('Check Environment') {
            steps {
                bat 'echo JAVA_HOME=%JAVA_HOME%'
                bat 'java -version'
                bat 'where java'
                bat 'set'
            }
        }
    }
}