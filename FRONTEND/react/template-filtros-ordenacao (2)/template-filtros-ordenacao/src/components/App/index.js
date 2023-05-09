import React, { useState } from "react"
import { Header } from "../Header";
import { Card } from "../Card";
import { ListContainer } from "./style";

//lista de dados para utilizar
import jobList from "../../data/jobs.json"

export function App() {

  const [jobs] = useState(jobList)

  return <>
    <Header />

    <ListContainer>
      {jobs.map(job => {
          return <Card key={job.id} job={job} />
        })}
    </ListContainer>
  </>
}