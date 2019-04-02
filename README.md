## POINTS: 1.5
## KEY: Great Job overall. For the update, you just needed to look up the animal first before updating with the data received in the request


# Mongo/Mongoose Graded Classwork

### Exercise 1: Create a Web API for ZOO Animals

* Create a new Express web service called ZooWeb (manually, or with the Express Generator)
* Sign into your mongoDB account, and create a new collection called ```zooanimals``` (NOTE the connection String that gets generated!)
* Create a Mongoose data model called ```ZooAnimal``` with the following fields:

```
animal_id
animal_type
animal_description
```
Implement the following endpoints for your ZooWeb web service:
```/zoowebapi/animal/add/ANIMAL_ID/ANIMAL_TYPE/ANIMAL_DESCRIPTION``` That will add an animal

```/zoowebapi/animal/get/ANIMAL_ID``` That will get an animal by id and return the JSON retrieved

```/zoowebapi/animal/update/ANIMAL_ID/ANIMAL_TYPE/ANIMAL_DESCRIPTION``` That will update the TYPE and DESCRIPTION of the animal with the provided ID and return the updated JSON

```/zoowebapi/animal/del/ANIMAL_ID``` That will delete an animal


### Extra:
Convert endpoints above to a true RESTful API by eliminating the verbs in the endpoints and using HTTP 










