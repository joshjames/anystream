# anystream
code base for complete anystream stack mostly the AWS infrastructure and dependencies

this repository will be made up of several main components.
1. the cloudformation stack that creates:
          *load balancer
          *ec2 worker scale group
          *ec2 instances (will move to containers eventually)
          *sqs queues
          *route 53 rules/domains etc
          *IAM roles etc
          
2. the artifacts, dependencies and any files needed for the stack

3. to codebase for the backend node.js service for getting media for the anystream service
      this codebase is a node.js service that works as an indipendent service for the main anystream web front end.
      it listens to requests on backend.anystream.com.au/getmedia
      accepts a video I.D like backend.anystream.com.au/getmedia?videoId=123
      this uses the anystream (streama) video I.D to do a lookup.
      the video table has everything it needs. (id, api_id, imdb_id, class (streama.movie, streama.episode), name, title, season number, release date)
      at its core functionality a webservice call to getmedia?videoId=123 will kick off a function like so.
      *INSTERT FLOW DIAGRAM*
      
