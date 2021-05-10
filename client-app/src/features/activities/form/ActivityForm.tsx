import React, { ChangeEvent } from 'react'
import { useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { Activity } from '../../../app/models/activity'

interface Props
{
    selectedActivity: Activity | undefined;
    closeForm: () => void;
    createOrEdit : (activity : Activity) => void;
}

export default function ActivityForm({selectedActivity, 
                                      closeForm,
                                      createOrEdit}: Props){
    const initialState = selectedActivity ?? {
        id: "",
        title:"",
        description: "",
        date: "",
        venue: "",
        city: "",
        category: ""
    }
    function handleSubmit(){
        createOrEdit(activity);
    }

    function handleInputChanged(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name, value} = event.target;
        setActivity({...activity, [name]: value});
    } 
    const [activity, setActivity] = useState(initialState);
    return (
        <Segment clearing>
            <Form>
                <Form.Input placeholder='Title' value={activity.title} name="title" onChange={handleInputChanged}/>
                <Form.TextArea placeholder='Description'value={activity.description} name="description" onChange={handleInputChanged} />
                <Form.Input placeholder='Category'value={activity.category} name="category" onChange={handleInputChanged} />
                <Form.Input placeholder='Date'value={activity.date} name="date" onChange={handleInputChanged} />
                <Form.Input placeholder='City'value={activity.city} name="city" onChange={handleInputChanged} />
                <Form.Input placeholder='Venue'value={activity.venue} name="venue" onChange={handleInputChanged} />
                <Button onClick={handleSubmit} floated='right' positive type='submit' content='Submit'/>
                <Button onClick={closeForm} floated='right' type='button' content='Cancel'/>
            </Form>
        </Segment>
    )
}