'use client'
import React, { useEffect } from 'react'

const BootstrapClient = () => {

  useEffect(() => {
     require('bootstrap/dist/js/bootstrap.js')
  }, []);

  return null
}

export default BootstrapClient