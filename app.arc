@app
your-app

@http
get /
get /Data
get /people
get /scanpeople
post /people

@aws
# profile default
region us-west-2
architecture arm64

@tables
people
  email *String

@tables-indexes
people
  job *String
  name peopleByJob