pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                script {
                    // Сборка Docker-образа
                    docker.build('hello-world-app')
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Запуск тестов внутри Docker-образа
                    docker.image('hello-world-app').inside {
                        sh 'npm install' // Установка зависимостей, если требуется
                        sh 'npm test'    // Запуск тестов
                    }
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    // Публикация Docker-образа на Docker Hub
                    docker.withRegistry('https://index.docker.io/v1/', 'docker-hub-credentials') {
                        docker.image('hello-world-app').push('latest') // Указываем тег для образа
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
            // Очистка рабочего пространства после завершения пайплайна
            cleanWs()
        }
    }
}
