import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { create, trash } from 'ionicons/icons';
import { useLiveQuery } from "dexie-react-hooks";
import { Form, useParams } from "react-router-dom";
import { db } from "./db";

function CounterPage() {
  const { id } = useParams();
  const counter = useLiveQuery(() => db.counters.get(parseInt(id!)));
  // TODO: handle unknown counter and non-numeric param https://reactrouter.com/en/main/fetch/redirect

  return (
    <IonPage id="counter-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>{counter?.name}</IonTitle>
          <IonButtons slot="secondary">
            <Form action="edit">
              <IonButton type="submit">
                <IonIcon slot="icon-only" icon={create}></IonIcon>
              </IonButton>
            </Form>
            <Form method="post" action="destroy" onSubmit={(ev) => {
              if (!confirm('Are you sure you want to delete this counter?')) {
                ev.preventDefault();
              }
            }}>
              <IonButton type="submit">
                <IonIcon slot="icon-only" icon={trash}></IonIcon>
              </IonButton>
            </Form>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        counter!
      </IonContent>
    </IonPage>
  )
}

export default CounterPage;
