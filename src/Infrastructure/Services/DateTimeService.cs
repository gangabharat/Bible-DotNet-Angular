using Bible.Application.Common.Interfaces;
using System;

namespace Bible.Infrastructure.Services
{
    public class DateTimeService : IDateTime
    {
        public DateTime Now => DateTime.Now;
    }
}
