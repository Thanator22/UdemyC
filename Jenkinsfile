pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage('Execute Tests') {
            steps {
                  sh "npm run test -- --coverage . --watchAll=false"
            }	    
	    } 
        stage('ExecuteSonarQubeReport') {
            steps {
                  sh "npm run sonar"
            }	    
	    }  
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/jenkins-react-app"
                sh "sudo cp -r ${WORKSPACE}/build/ /var/www/jenkins-react-app/"
            }
        }
    }
}