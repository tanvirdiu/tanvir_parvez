import './VisitorCounter.css'

import { useEffect, useState } from 'react'

import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  increment,
  onSnapshot
} from 'firebase/firestore'

import { db } from '../../firebase'


function VisitorCounter() {

  const [count, setCount] = useState(0)


  useEffect(() => {

    const visitorRef =
      doc(db, 'portfolio', 'visitors')


    const hasVisited =
      localStorage.getItem('visited')


    const updateVisitor = async () => {

      const snapshot =
        await getDoc(visitorRef)


      if (!snapshot.exists()) {

        await setDoc(visitorRef, {
          count: 1
        })

      }

      else if (!hasVisited) {

        await updateDoc(visitorRef, {
          count: increment(1)
        })

      }


      localStorage.setItem(
        'visited',
        'true'
      )

    }


    updateVisitor()


    const unsubscribe = onSnapshot(

      visitorRef,

      (doc) => {

        setCount(doc.data()?.count || 0)

      }

    )


    return () => unsubscribe()

  }, [])


  return (

    <div className="visitor-counter">

      👁 {count}+ Visitors

    </div>

  )
}

export default VisitorCounter