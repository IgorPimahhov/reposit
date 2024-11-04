pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    docker.build('hello-world-app')
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    docker.image('hello-world-app').inside {
                        sh 'npm test'
                    }
                }
            }
        }
        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
                        docker.image('hello-world-app').push()
                    }
                }
            }
        }
    }
}
