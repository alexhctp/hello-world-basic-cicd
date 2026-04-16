pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'docker build -t hello-world-node .'
            }
        }

        stage('Deploy') {
            steps {
                sh '''
                    docker rm -f hello-world-container || true
                    docker run -d --name hello-world-container -p 80:3000 hello-world-node
                '''
            }
        }
    }
}
