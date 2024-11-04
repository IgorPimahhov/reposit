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
                        // Настройка кэша для npm
                        sh 'mkdir -p /home/node/.npm && npm config set cache /home/node/.npm --global'
                        sh 'npm install --unsafe-perm'
                        sh 'npm test'
                    }
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
                        docker.image('hello-world-app').push('latest')
                    }
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed. Please check the logs for details.'
        }
        always {
            cleanWs()
        }
    }
}
